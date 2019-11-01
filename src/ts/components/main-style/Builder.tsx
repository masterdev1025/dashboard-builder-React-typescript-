// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { SnackbarProvider } from "notistack";
import { Footer, Header, Main } from "./BuilderParts";

// React
import React from "react";
// Styles
import "./Builder.scss";

import "./scss/global.scss";

library.add(fab, fas);

export const Builder: React.FC = () => {
	return (
		<SnackbarProvider maxSnack={1}>
			<div className="builder-Builder">
				<Header></Header>

				<Main></Main>

				<Footer></Footer>
			</div>
		</SnackbarProvider>
	);
};
