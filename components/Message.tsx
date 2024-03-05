type MessageProps = {
  title: string;
  content: string;
};

const Message = (props: MessageProps) => {
  const { title, content } = props;

  return (
    <div className="bg-gray-100 p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Message;
