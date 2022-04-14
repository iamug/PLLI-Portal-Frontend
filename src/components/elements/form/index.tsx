import React, { ElementType } from "react";
import { Field } from "formik";
import { Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../helpers";

interface INPUT {
  name: string;
  type?: string;
  label?: string;
  as?: ElementType;
  disableValidation?: boolean;
  disableLabel?: boolean;
  [key: string]: string | any;
}
interface SELECT {
  name: string;
  options: string[] | { label: string; value: string }[];
  label?: string;
  as?: ElementType;
  disableValidation?: boolean;
  firstItem?: string;
  [key: string]: string | any;
}

interface INPUTADDON extends INPUT {
  AddonText: string;
}

export const Input = ({ name, type, label, disableLabel = true, disableValidation = true, ...props }: INPUT) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <FloatingLabel label={!disableLabel ? " " : label || capitalizeFirstLetter(name)} className="mb-2">
              <Form.Control
                type={type || `text`}
                isInvalid={!disableValidation && (meta.value || meta.touched) && meta.error}
                isValid={!disableValidation && (meta.value || meta.touched) && !meta.error}
                {...field}
                {...props}
              />
            </FloatingLabel>
            {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
          </>
        )}
      </Field>
    </>
  );
};

// export const Input = ({ name, type, label, disableLabel = false, disableValidation = true, ...props }: INPUT) => {
//   return (
//     <>
//       <Field name={name}>
//         {({ field, meta }: any) => (
//           <>
//           <FloatingLabel label={label || capitalizeFirstLetter(name)} className="mb-2">
//               <Form.Control
//                 type={type || `text`}
//                 isInvalid={!disableValidation && (meta.value || meta.touched) && meta.error}
//                 isValid={!disableValidation && (meta.value || meta.touched) && !meta.error}
//                 {...field}
//                 {...props}
//               />
//             </FloatingLabel>
//             {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
//           </>
//         )}
//       </Field>
//     </>
//   );
// };

export const Select = ({ name, label, disableValidation = true, options, firstItem, ...props }: SELECT) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <FloatingLabel label={label || capitalizeFirstLetter(name)} className="mb-2">
              <Form.Select
                isInvalid={!disableValidation && (meta.value || meta.touched) && meta.error}
                isValid={!disableValidation && (meta.value || meta.touched) && !meta.error}
                {...props}
                {...field}
              >
                <option selected disabled>
                  {" "}
                  {firstItem ?? `Select ${label || capitalizeFirstLetter(name)}`}
                </option>
                {options?.map((item, index: number): any => (
                  <option key={index} value={typeof item == "object" ? item.value : item}>
                    {typeof item == "object" ? item.label : item}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
            {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
          </>
        )}
      </Field>
    </>
  );
};

export const InputAddon = ({ name, type, label, disableValidation, optn, opnValues, AddonText, ...props }: INPUTADDON) => {
  return (
    <>
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <InputGroup className="mb-2">
              <FloatingLabel label={label || capitalizeFirstLetter(name)} className="" style={{ flexGrow: 1 }}>
                {optn ? (
                  <Form.Select
                    isInvalid={!disableValidation && (meta.value || meta.touched) && meta.error}
                    isValid={!disableValidation && (meta.value || meta.touched) && !meta.error}
                    {...props}
                    {...field}
                  >
                    <option disabled></option>
                    {opnValues?.map((item: any, index: number): any => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <Form.Control
                    type={type || `text`}
                    isInvalid={!disableValidation && (meta.value || meta.touched) && meta.error}
                    isValid={!disableValidation && (meta.value || meta.touched) && !meta.error}
                    {...field}
                    {...props}
                  />
                )}
              </FloatingLabel>
              <InputGroup.Text>{AddonText}</InputGroup.Text>
            </InputGroup>
            {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
          </>
        )}
      </Field>
    </>
  );
};
