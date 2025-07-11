import { Formik } from "formik";
import * as yup from "yup";

const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email noto‘g‘ri!")
    .required("Email kiritilishi kerak!"),
  password: yup
    .string()
    .min(6, "Parol kamida 6 belgidan iborat bo‘lishi kerak!")
    .required("Parol kiritilishi kerak!"),
});

function AuthForm({ isLogin = true, onSubmit }) {
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </div>
            <button type="submit">{isLogin ? "Login" : "Signup"}</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AuthForm;
