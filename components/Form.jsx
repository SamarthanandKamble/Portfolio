"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader,
  Loader2,
  Loader2Icon,
  LoaderIcon,
} from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormData({});
        setSuccessMessage(true);
      }
    } catch (error) {
      console.warn(error.message);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormDataChange(e)}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormDataChange(e)}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type your message here..."
          name="message"
          value={formData.message}
          onChange={(e) => handleFormDataChange(e)}
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button
        className="flex items-center gap-x-1 max-w-[166px]"
        // onClick={(e) => handleFormSubmit(e)}
      >
        Let's Talk
        {loading ? <LoaderIcon size={20} /> : <ArrowRightIcon size={20} />}
      </Button>

      {successMessage && (
        <span className="">
          Thanks for the suggestion! I'll get back to you ASAP.
        </span>
      )}
      {error && <span className="text-red-400 font-semibold">{error}</span>}
    </form>
  );
};

export default Form;
