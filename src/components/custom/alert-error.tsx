declare interface AlertErrorProps {
  errorMessage: string;
  customs?: string;
}

// Use this component to show Form Errors

export default function AlertError({ errorMessage, customs }: AlertErrorProps) {
  return (
    <div className="p-4">
      <p
        className={`bg-red-50 text-red-500 rounded-sm p-2 my-2 text-center text-base ${customs}`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
