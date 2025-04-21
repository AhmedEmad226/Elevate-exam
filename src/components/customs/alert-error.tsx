declare interface ErrorMessage {
  errorMessage: string;
}

// Use this component to show Form Errors

export default function AlertError({ errorMessage }: ErrorMessage) {
  return (
    <div className="p-4">
      <p className="bg-red-50 text-red-500 rounded-sm p-2 my-2 text-center text-base">
        {errorMessage}
      </p>
    </div>
  );
}
