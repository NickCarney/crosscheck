interface FormMessageProps {
  type: "success" | "error";
  message: string;
}

export function FormMessage({ type, message }: FormMessageProps) {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  return (
    <div className={`mb-6 p-4 border rounded-lg ${styles[type]}`}>
      <p className="font-medium">{message}</p>
    </div>
  );
}
