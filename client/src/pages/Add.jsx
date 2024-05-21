import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import mainContext from "../context/Context";
const Add = () => {
  const {data,setData,setSearch,search}=useContext(mainContext)
  const formik = useFormik({
    initialValues: {
      img: "",
      price: "",
      title: "",
      detail: "",
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Required"),
      price: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      title: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      detail: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await axios.post("http://localhost:7008/api/product",values).then(res=>{
      setData([...data,res.data])
      setSearch([...search,res.data])
     })
     formik.resetForm()
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{marginTop:"200px"}}>
        <label htmlFor="img">img</label>
        <input id="img" type="text" {...formik.getFieldProps("img")} />
        {formik.touched.img && formik.errors.img ? (
          <div>{formik.errors.img}</div>
        ) : null}

        <label htmlFor="price">Number</label>
        <input id="price" type="Number" {...formik.getFieldProps("price")} />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
        
          <label htmlFor="title">title</label>
        <input id="title" type="text" {...formik.getFieldProps("title")} />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
         
          <label htmlFor="detail">detail</label>
        <input id="detail" type="text" {...formik.getFieldProps("detail")} />
        {formik.touched.detail && formik.errors.detail ? (
          <div>{formik.errors.detail}</div>
        ) : null}

      

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Add;
