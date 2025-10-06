'use client';

import { FormEvent, useState } from "react";

const initialState = {
  nome: "",
  email: "",
  mensagem: "",
};

type FormState = typeof initialState;

type FormErrors = Partial<FormState>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (values: FormState): FormErrors => {
    const newErrors: FormErrors = {};

    if (!values.nome.trim()) {
      newErrors.nome = "Informe seu nome completo.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Informe um e-mail válido.";
    } else if (!emailRegex.test(values.email.trim())) {
      newErrors.email = "O e-mail informado não parece válido.";
    }

    if (!values.mensagem.trim()) {
      newErrors.mensagem = "Compartilhe sua mensagem ou dúvida.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("success");
    setForm(initialState);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, nome: event.target.value }))
            }
            placeholder="Digite seu nome"
          />
          {errors.nome && <span className="field-error">{errors.nome}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">E-mail corporativo</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="seunome@empresa.com.br"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, mensagem: event.target.value }))
            }
            placeholder="Conte como podemos ajudar sua empresa"
          />
          {errors.mensagem && <span className="field-error">{errors.mensagem}</span>}
        </div>

        {status === "success" && (
          <div className="form-status form-status--success">
            Sua mensagem foi registrada! Entraremos em contato em breve.
          </div>
        )}

        {status === "error" && Object.keys(errors).length > 0 && (
          <div className="form-status form-status--error">
            Revise os campos destacados e tente novamente.
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}
