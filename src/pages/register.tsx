import { isEmpty } from 'lodash-es'
import { useEffect, type ReactElement } from 'react'

import { Button, AccountLabelInput, LabelContent, Textarea } from '@/components/common'
import { Layout } from '@/components/public/Layout'
import { PageTemplate } from '@/components/public/PageTemplate'
import { ERROR_MSG } from '@/constants'
import useMutation from '@/libs/client/useMutation'
import { RegisterQueryModel, RegisterServerModel, StandardResponse } from '@/types'
import { makeCryptoFunction } from '@/utils/helpers'
import { checkEmailValidation, checkPasswordType } from '@/utils/helpers/validation'
import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterQueryModel>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const [registerMutate, { loading, data }] = useMutation<StandardResponse<RegisterServerModel>>('/api/register')

  const handleLogin = (data: RegisterQueryModel) => {
    const req = {
      email: data.emailAddr!,
      nickname: data.nickname,
      introduce: data.introduce,
      password: makeCryptoFunction(data.passCode!),
    }

    registerMutate(req)
  }

  useEffect(() => {
    if (data?.ok) {
      console.log('register success')
    } else {
      console.log('register failed')
    }
  }, [data])

  return (
    <PageTemplate>
      <PageTemplate.PageContentsSection>
        <h1 className="a11y">Register Page</h1>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Wrapper>
            <AccountLabelInput
              id="nickname"
              label="Nickname"
              value={watch('nickname')}
              errorMsg={errors?.nickname?.message}
              hasError={Boolean(errors.nickname)}
            >
              <AccountLabelInput.Input
                register={register('nickname', {
                  required: ERROR_MSG.NICKNAME,
                })}
              />
            </AccountLabelInput>
            <AccountLabelInput
              id="emailAddr"
              label="E-mail"
              value={watch('emailAddr')}
              errorMsg={errors?.emailAddr?.message}
              hasError={Boolean(errors.emailAddr)}
            >
              <AccountLabelInput.Input
                register={register('emailAddr', {
                  required: ERROR_MSG.EMAIL,
                  validate: {
                    emailValidate: v => checkEmailValidation(v || '') || ERROR_MSG.EMAIL_VALID,
                  },
                })}
              />
            </AccountLabelInput>
            <AccountLabelInput
              id="passCode"
              label="Password"
              value={watch('passCode')}
              errorMsg={errors?.passCode?.message}
              hasError={Boolean(errors.passCode)}
            >
              <AccountLabelInput.Password
                register={register('passCode', {
                  required: ERROR_MSG.PASSWORD,
                  validate: {
                    passwordValidate: v => checkPasswordType(v || '') || ERROR_MSG.PASSWORD_TYPE,
                  },
                })}
              />
            </AccountLabelInput>
            <LabelContent.Content heading="Introduce" css={introduceCss}>
              <Textarea
                css={introduceTextarea}
                placeholder="Please enter the reason for rejection"
                maxLength={512}
                textValue={watch('introduce')}
                register={register('introduce', {
                  maxLength: 512,
                })}
              />
            </LabelContent.Content>
          </Wrapper>
          <Button css={submitBtn} type="submit" color="blue" disabled={!isEmpty(errors) || loading}>
            Sign in
          </Button>
        </Form>
      </PageTemplate.PageContentsSection>
    </PageTemplate>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header>{page}</Layout>
}

const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0 80px;
    padding: 32px;
    border: 1px solid ${theme.color.gray_20};
    background-color: ${theme.color.white};

    @media ${theme.breakPoint.device.tablet} {
      max-width: 528px;
      margin: 40px auto;
      padding: 64px;
    }
  `}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 20px;
`

const submitBtn = (theme: Theme) => css`
  ${theme.font.medium_15};
  width: 100%;
  height: 52px;
  margin: 20px 0;
`

const introduceCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;

  & > dt {
    ${theme.font.regular_12};
  }
`

const introduceTextarea = (theme: Theme) => css`
  ${theme.font.regular_12};
  width: 100%;
  height: 122px;
  border: 1px solid ${theme.color.gray_20};
  border-radius: 8px;
  padding: 13px 20px 44px 20px;
`

export default LoginPage
