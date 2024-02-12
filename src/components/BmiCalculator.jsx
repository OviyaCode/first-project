import { Card } from "@material-tailwind/react";
import { useState } from "react";

const BmiCalculator = () => {
  const [formData, setFormData] = useState({
    height: 0,
    weight: "",
  });

  const [bmi, setBmi] = useState(null);

  const Calc = (e) => {
    e.preventDefault();
    console.log(formData);
    let heightInMeters = formData.height / 100;
    let bmi = formData.weight / (heightInMeters * heightInMeters);
    console.log("BMI", bmi);
    setBmi(bmi);
  };

  return (
    <Card className="max-w-sm m-auto rounded-md shadow-md shadow-black-300">
      <h3 className="text-2xl text-green-500 mt-4 p-3 text-center">
        Check your healthy
      </h3>
      <form className="my-2 flex flex-col gap-3" onSubmit={Calc}>
        <div className="mb-1 flex flex-row gap-6">
          <h4 className="p-4 text-green-500 font-semibold">Height: </h4>
          <input
            type="number"
            placeholder="Height in cm"
            className="border-green-500 border rounded p-3 w-fit"
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
          />
        </div>
        <div className="mb-1 flex flex-row gap-5">
          <h4 className="p-4 text-green-500 font-semibold">Weight: </h4>
          <input
            type="number"
            className="border-green-500 border rounded p-3 w-fit"
            placeholder="Weight in kgs"
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
        </div>
        <div className="mb-1 flex flex-row gap-5">
          <button
            type="submit"
            className="mt-0 m-auto bg-green-500 p-3 rounded-xl text-white"
          >
            Calcute
          </button>
        </div>
      </form>
      {bmi && (
        <div className="flex bg-slate-800 text-center">
          <p
            className={`p-4 ${
              bmi < 18
                ? "text-red-500"
                : bmi <= 24.9
                ? "text-green-500"
                : "text-orange-500"
            }`}
          >
            BMI: {bmi.toFixed(2)}
          </p>
        </div>
      )}
    </Card>
  );
};

export default BmiCalculator;
