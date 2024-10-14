<template>
  <Form
    class="frombox"
    @submit="handleSubmit(submitForm($event))"
    :validation-schema="validationSchema"
  >
    <label for="username">Enter your details</label>
    <div class="box">
      <div class="inputBox">
        <Input name="name" type="text" placeholder="Name" />
        <div class="icon">
          <Icon icon="fa-solid fa-user" />
        </div>
      </div>
      <div class="error">
        <ErrorMessage name="name" />
      </div>
    </div>

    <div class="box">
      <div class="inputBox">
        <Input name="surname" type="text" placeholder="Surname" />
        <div class="icon">
          <Icon icon="fa-solid fa-user" />
        </div>
      </div>
      <div class="error">
        <ErrorMessage name="surname" />
      </div>
    </div>

    <div class="box">
      <div class="inputBox">
        <Input name="email" type="text" placeholder="Email Address" />
        <div class="icon">
          <Icon icon="fa-solid fa-envelope" />
        </div>
      </div>
      <div class="error">
        <ErrorMessage name="email" />
      </div>
    </div>
    <div class="box">
      <div class="inputBox">
        <Input name="password" type="password" placeholder="Password" />
        <div class="icon">
          <Icon icon="fa-solid fa-key" />
        </div>
      </div>
      <div class="error">
        <ErrorMessage name="password" />
      </div>
    </div>

    <div class="box">
      <div class="inputBox">
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        <div class="icon">
          <Icon icon="fa-solid fa-key" />
        </div>
      </div>
      <div class="error">
        <ErrorMessage name="confirmPassword" />
      </div>
    </div>

    <Button class="btn btn-submit-signup">Enter</Button>
  </Form>
</template>

<script setup>
import { Form, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";
import { useAccountStore } from "@/store/account";
import { useRouter } from "vue-router";

const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  surname: yup.string().required("surname is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const router = useRouter();
const submitForm = (values) => {
  console.log("Form submitted:", values);
  values.confirmPassword = undefined;
  const accountStore = useAccountStore();
  accountStore.signup(values);
  router.push("/welcomeEmailConfirmation");
};

const { handleSubmit } = useForm({
  validationSchema,
});
</script>

<style>
.frombox input {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(165, 165, 165);
  padding: 12px 0px 12px 40px;
  width: 100%;
}

.frombox {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.inputBox {
  position: relative;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(87, 87, 87);
}

.frombox label {
  color: white;
  display: block;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
}

.formbox > div {
  width: 100%;
  background-color: aqua;
}

.box {
  width: 100%;
}

.error {
  color: rgb(255, 0, 0);
  font-size: 14px;
}
</style>
