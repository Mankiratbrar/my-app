
interface PageProps {
    params: {
        id: string;
    };
}

const page = ({ params }: PageProps) => {
    return <div>Welcome to the about page with ID: {params.id}</div>;
}
export default page;