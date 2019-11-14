<script>
import { Form } from 'ant-design-vue'

const RegistrationForm = {
  data: function () {
    return {
      confirmDirty: false,
      autoCompleteResult: []
    }
  },
  methods: {
    signUp: function (values) {
      this.$http.post('/api/signUp', { user: values }).then((response) => {
        if (response.data.result === 0) {
          alert('Error, please, try again')
        }
        if (response.data.result === 1) {
          alert('Success')
          this.$router.push('../../login') // Login 페이지로 보내줌
        }
      })
      .catch(function () {
        console.log('methods catch에 걸림');
        alert('error')
    })
  },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('OK', values);
          this.signUp(values);
        }
      })
    },
    handleConfirmBlur  (e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!')
      } else {
        callback()
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleWebsiteChange  (value) {
      let autoCompleteResult
      if (!value) {
        autoCompleteResult = []
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      }
      this.autoCompleteResult = autoCompleteResult
    },
  },

  render () {
    const { getFieldDecorator } = this.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }

    return (
      <a-form onSubmit={this.handleSubmit}>
        <a-form-item
          {...{ props: formItemLayout }}
          label='E-mail'
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <a-input />
          )}
        </a-form-item>
        <a-form-item
          {...{ props: formItemLayout }}
          label='Password'
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <a-input type='password' />
          )}
        </a-form-item>
        <a-form-item
          {...{ props: formItemLayout }}
          label='Confirm Password'
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <a-input type='password' onBlur={this.handleConfirmBlur} />
          )}
        </a-form-item>
        <a-form-item
          {...{ props: formItemLayout }}
          label={(
            <span>
              Nickname&nbsp;
              <a-tooltip title='What do you want others to call you?'>
                <a-icon type='question-circle-o' />
              </a-tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <a-input />
          )}
        </a-form-item>
       <div class="agreeleft">
        <a-form-item {...{ props: tailFormItemLayout }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <a-checkbox>I have read the <a href=''>agreement</a></a-checkbox>
          )}
        </a-form-item>
        </div>
        <div class="butcenter">
        <a-form-item {...{ props: tailFormItemLayout }}>
          <a-button size='large' htmlType='submit'>
          Register
          </a-button>
        </a-form-item>
        </div>
      </a-form>
    )
  },
}

export default Form.create()(RegistrationForm)
</script>