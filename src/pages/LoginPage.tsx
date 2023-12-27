import { isEmpty } from 'lodash-es'
import { Button, AccountLabelInput, LabelContent, Textarea } from '@/components/common'
import { PageTemplate } from '@/components/public/PageTemplate'
import { ERROR_MSG } from '@/constants'
import { useDidMount } from '@/hooks/useDidMount'
import useMutation from '@/libs/client/useMutation'
import { RegisterQueryModel, RegisterServerModel, StandardResponse } from '@/types'
import { makeCryptoFunction } from '@/utils/helpers'
import { checkEmailValidation, checkPasswordType } from '@/utils/helpers/validation'
import { useForm } from 'react-hook-form'
import { Form, Wrapper, introduceCss, introduceTextarea, submitBtn } from './register'

export const LoginPage = () => {
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

  useDidMount(() => {
    if (data?.ok) {
      console.log('register success')
    } else {
    }
  }, [])

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
