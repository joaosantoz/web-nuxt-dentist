export type DentistApiError = {
  statusCode: number;
  statusMessage: string;
}

export const handleDentistNotFoundError = (error: DentistApiError): never => {
  console.log(error)

  const responseNotFoundError = createError<DentistApiError>({
    status: error.statusCode,
    statusMessage: error.statusMessage,
  });

  throw responseNotFoundError;
}