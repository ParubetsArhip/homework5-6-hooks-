interface UserProps {
    name: string;
    email: string;
    age: number;
}

const User = ({name, email, age}: UserProps) => {
    return (
        <div className="border p-4 rounded-md shadow-sm">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm">Age: {age}</p>
        </div>
    );
};

export default User;
