export default function LoginForm() {

    const handleClick = () => {
        event.preventDefault();

    };

    return (
        <form onClick={handleClick}>
            <button style={{ margin: '600px', width: '200px', height: '100px' }}>
                Login with Google!
            </button>
        </form>
    )
}