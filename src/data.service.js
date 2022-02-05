const URI = "http://localhost:5000";

const getInventory = async () => {
  try {
    const res = await fetch(`${URI}/stock`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addStock = async (data) => {
  try {
    const res = await fetch(`${URI}/stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addDiamondPurchase = async (data) => {
  try {
    const res = await fetch(`${URI}/purchase-diamond`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addGoldPurchase = async (data) => {
  try {
    const res = await fetch(`${URI}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getSuppliers = async () => {
  try {
    const res = await fetch(`${URI}/supplier`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addSupplier = async (data) => {
  try {
    const res = await fetch(`${URI}/supplier`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const findCustomer = async (data) => {
  try {
    const result = await fetch(`${URI}/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CustomerPhoneNumber: data }),
    });
    const response = await result.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const addCustomer = async (data) => {
  try {
    const res = await fetch(`${URI}/customer/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addItemSold = async (data) => {
  try {
    const res = await fetch(`${URI}/add-sold-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getOrderDetails = async () => {
  try {
    const res = await fetch(`${URI}/getOrderDetails`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (data) => {
  try {
    const res = await fetch(`${URI}/delete-order`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        huid: data.huid,
      }),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const getCustomers = async () => {
  try {
    const res = await fetch(`${URI}/customers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const addCompanyInfo = async (data) => {
  try {
    const res = await fetch(`${URI}/companyinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const changeFirstLogin = async () => {
  try {
    const put = await fetch(`${URI}/first-login`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: localStorage.getItem("user").username,
        first_login: false,
      }),
    });
    const putData = await put.json();
    return putData;
  } catch (err) {
    console.log(err);
  }
};

const getCompanyInfo = async () => {
  try {
    const res = await fetch(`${URI}/getcompanyinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  getInventory,
  addStock,
  addDiamondPurchase,
  getSuppliers,
  addGoldPurchase,
  addSupplier,
  findCustomer,
  addCustomer,
  addItemSold,
  getOrderDetails,
  deleteOrder,
  getCustomers,
  addCompanyInfo,
  changeFirstLogin,
  getCompanyInfo,
};
