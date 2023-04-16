const Header = () => {
	return (
		<header className="bg-primary">
			<img
				className=" w-full md:hidden"
				src="/src/assets/images/bg-header-mobile.svg"
				alt="background design"
			/>
			<img
				className=" w-full hidden md:block"
				src="/src/assets/images/bg-header-desktop.svg"
				alt="background design"
			/>
		</header>
	);
};
export default Header;
