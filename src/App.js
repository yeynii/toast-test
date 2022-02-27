import "./App.css";
import { SnackbarProvider } from "notistack";
import MyButton from "./MyButton";
import ToastMessage from "./ToastMessage";

function App() {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={1000}
      content={(key, value) =>
        <ToastMessage
          id={key}
          message={value.message}
          style={value.style}
        />}
    >
      <div className="App">
        <MyButton />
      </div>
    </SnackbarProvider>
  );
}

export default App;
