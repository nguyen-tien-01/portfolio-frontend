import axiosClient from "./axiosClient";

const todoApi = {
  getAllKiNang: (params = null) => {
    const url = "/KiNang";
    // {
     // id: "đasadsa",
    // search: "đâsdsadsa"
    //}
    return axiosClient.get(url, { params });
  },
  getAllCongViec: (params = null) => {
    const url = "/CongViec";
    return axiosClient.get(url, { params });
  },
  getAllThongTin: (params = null) => {
    const url = "/ThongTin";
    return axiosClient.get(url, { params });
  },
  getAllTruongHoc: (params = null) => {
    const url = "/TruongHoc";
    return axiosClient.get(url, { params });
  },
  getAllMessage: (params = null) => {
    const url = "/Message";
    return axiosClient.get(url, { params });
  },
  Posttodo: (data, params = null) => {
    const url = "/CongViec";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
  getOneId: (id) => {
    const url = `/Todo/${id}`;
    return axiosClient.get(url);
  },


  DleTodo: (id) => {
    const url = `/CongViec/${id}`;
    return axiosClient.delete(url);
  },
  DleKiNang: (id) => {
    const url = `/KiNang/${id}`;
    return axiosClient.delete(url);
  },
  DleCongViec: (id) => {
    const url = `/CongViec/${id}`;
    return axiosClient.delete(url);
  },
  DleTruongHoc: (id) => {
    const url = `/TruongHoc/${id}`;
    return axiosClient.delete(url);
  },


  updateThongTin: (data) => {
    const url = `/ThongTin`;
    return axiosClient.put(url, data);
  },
  updateKiNang: (data) => {
    const url = `/KiNang`;
    return axiosClient.put(url, data);
  },
  updateCongViec: (data) => {
    const url = `/CongViec`;
    return axiosClient.put(url, data);
  },
  updateTruongHoc: (data) => {
    const url = `/TruongHoc`;
    return axiosClient.put(url, data);
  },


  PostMessage: (data, params = null) => {
    const url = "/Message";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
  PostKiNang: (data, params = null) => {
    const url = "/KiNang";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
  PostCongViec: (data, params = null) => {
    const url = "/CongViec";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
  PostTruongHoc: (data, params = null) => {
    const url = "/TruongHoc";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
};

export default todoApi;
