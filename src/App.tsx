import { ExampleComponent } from "boavista-bv-ui-lib";
import CustomCheckbox from "./components/atomic/atoms/CustomCheckbox";
import { ElevationContainer } from "./components";

function App() {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    console.log("Checkbox changed:", checked);
    console.log("Checkbox value:", value);
  };
  return (
    <>
      <h1>BV-UI</h1>
      <CustomCheckbox
        label="Checkbox"
        onChange={handleCheckboxChange}
        value="Checkbox"
      />
      <ExampleComponent />
      <div style={{width: '50%'}}>
        <ElevationContainer variant="card">teste</ElevationContainer>
      </div>
    </>
  );
}

export default App;
