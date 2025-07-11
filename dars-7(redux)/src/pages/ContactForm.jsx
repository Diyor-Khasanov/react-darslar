import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("Ism majburiy"),
  email: yup.string().email("Email noto‘g‘ri").required("Email majburiy"),
  message: yup.string().min(10, "Xabar juda qisqa").required("Xabar majburiy"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Xabar yuborildi:", data);
    reset();
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>Biz bilan bog‘laning</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Ism:</label>
          <input {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Xabar:</label>
          <textarea rows={5} {...register("message")} />
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message.message}</p>
          )}
        </div>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

export default ContactForm;
