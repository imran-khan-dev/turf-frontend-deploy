function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-10 text-gray-500 font-medium">
      {message}
    </div>
  );
}
export default EmptyState;