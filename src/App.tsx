import Header  from "./components/Header"
import FastestPizzaDelivery from "./modules/FastestPizzaDelivery"
import Footer from "./components/Footer"
import User from "./components/User"

interface UserType {
    id: number;
    name: string;
    email: string;
    age: number;
}


export default function App() {
    const userArray: UserType[] = [
        { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30 },
        { id: 3, name: "Bob Brown", email: "bob@example.com", age: 28 },
    ];

	return (
		<div className="max-w-[1400px] mx-auto">
			<Header />
            <main>
                <FastestPizzaDelivery />
            </main>
            <Footer />

            <h1 className={'text-[69px] text-[#FFF] font-extrabold leading-[109%]'}>
                Task 2
            </h1>
            <div className="p-6 space-y-4">
                {userArray.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </div>
		</div>
	)
}

// 1512px
