function ErrorState({ message }: { message: string }) {
  return (
    <div className="text-center py-10 text-red-600 font-medium">
      {message}
    </div>
  );
}
export default ErrorState;