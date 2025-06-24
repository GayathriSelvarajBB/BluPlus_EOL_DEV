import * as Yup from "yup";
export const stationCountSchema = Yup.object({
   pdx_selection: Yup.string().required("Please select a PDX option"),
   // pdx_file: Yup.mixed().required("Please select a PDX file"),
   pdx_file: Yup.mixed().when("pdx_selection", {
      is: "pdx for entire configuration",
      then: (schema) => schema.required("Please select a PDX file"),
      // .test(
      //    "fileExists",
      //    "A valid file must be selected",
      //    (value) => value && value instanceof File
      // ),
      otherwise: (schema) => schema.notRequired(),
   }),
   //    .test("fileExists", "A file must be selected", (value) => {
   //       return value && value instanceof File;
   //    }
   // ),
   no_of_station: Yup.number()
      .typeError("Must be a number")
      .required("Number of stations is required")
      .min(1, "Must be at least 1 station"),
});
