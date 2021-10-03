import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoaderDiv } from "./Loader.styled";

export function ContentLoader() {
  return (
    <LoaderDiv>
       <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
    </LoaderDiv>   
  );
}
