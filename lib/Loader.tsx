import { CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "white",
};

interface LoaderProps {
	onLoad: boolean;
	size?: number;
}

const Loader = ({ onLoad, size = 5 }: LoaderProps) => {
	return (
		<div className="sweet-loading">
			<SyncLoader
				color="#fff"
				loading={onLoad}
				cssOverride={override}
				size={5 | size}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loader;
