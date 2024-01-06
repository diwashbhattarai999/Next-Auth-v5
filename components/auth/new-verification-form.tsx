"use client";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { newVerification } from "@/actions/new-verification";
import CardWrapper from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-sucess";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center justify-center w-full">
        {!success && !error && <BeatLoader />}
        <FormSucess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
