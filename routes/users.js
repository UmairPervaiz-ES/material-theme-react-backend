import express, { json } from "express";
import { userModel } from "../database/model.js";
import bcrypt from 'bcrypt';

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with all users");
});

router.post("/data", async(req, res, next) => {

  let salt  = await bcrypt.genSalt(10);
  let generatedPassword = bcrypt.hash('12345678', salt);

  let obj = {
    name: 'Umair',
    email: 'umair.pervaiz@enlatics.com',
    password: generatedPassword,
  }
  let user = new userModel(obj);

  let jsonData = {
    InvoiceNumber: "INV-12345", //5
    Reference: null,
    Name: "John Doe", //5
    Email: "johndoe@example.com",
    Address: "123 Main Street, City",
    CreatedAt: "2023-07-19T12 =34 =56Z", //10
    DueDate: "2023-08-19", //10
    BrandingThemes: "Standard",
    LineAmountTypes: "exclusive", //10
    TaxRate: 0.15,
    TaxAmount: null,
    Items: 876,
    Accounts: "", //10
    Currency: "USD", //5
    Description: "Invoice for products purchased", //3
    Quantity: 10,
    UnitPrice: 70,
    LineItemTotalAmount: null,
    OfficeCategory: "",
    SubTotal: 80.0,
    Total: 890, //4
  };

  let jsonObjectValuesWeightage = {
    InvoiceNumber: {
      weight: "C",
      value: 5,
    },
    Reference: {
      weight: "N",
      value: 3,
    },
    Name: {
      weight: "C",
      value: 5,
    },
    Email: {
      weight: "N",
      value: 3,
    },
    Address: {
      weight: "N",
      value: 4,
    },
    CreatedAt: {
      weight: "C",
      value: 10,
    },
    DueDate: {
      weight: "C",
      value: 10,
    },
    BrandingThemes: {
      weight: "N",
      value: 0,
    },
    LineAmountTypes: {
      weight: "C",
      value: 10,
    },
    TaxRate: {
      weight: "N",
      value: 5,
    },
    TaxAmount: {
      weight: "N",
      value: 5,
    },
    Items: {
      weight: "N",
      value: 5,
    },
    Accounts: {
      weight: "C",
      value: 10,
    },
    Currency: {
      weight: "C",
      value: 5,
    },
    Description: {
      weight: "C",
      value: 3,
    },
    Quantity: {
      weight: "n",
      value: 3,
    },
    UnitPrice: {
      weight: "N",
      value: 2,
    },
    LineItemTotalAmount: {
      weight: "N",
      value: 3,
    },
    OfficeCategory: {
      weight: "N",
      value: 2,
    },
    SubTotal: {
      weight: "n",
      value: 3,
    },
    Total: {
      weight: "C",
      value: 4,
    },
  };

  let fillFieldCount = 0,
    unFilledFieldCount = 0,
    complusoryFieldWeight = 0,
    totalWeight = 0,
    notComplusoryFieldWeight = 0;

  for (const key in jsonData) {
    // console.log(jsonData.hasOwnProperty('InvoiceNumber'));
    // != null && jsonData[key] != ''
    if (jsonData[key]) {
      fillFieldCount += 1;

      if (jsonObjectValuesWeightage[key].weight == "C") {
        // console.log(jsonObjectValuesWeightage[key].value);
        complusoryFieldWeight += jsonObjectValuesWeightage[key].value;
      } else {
        notComplusoryFieldWeight += jsonObjectValuesWeightage[key].value;
      }
      totalWeight = complusoryFieldWeight + notComplusoryFieldWeight;
    } else {
      unFilledFieldCount += 1;
    }
  }

  res.status(200).json({
    erorr: false,
    user: user,
    filledFieldsCount: fillFieldCount,
    unFilledFieldsCount: unFilledFieldCount,
    complusoryFieldsScore: complusoryFieldWeight,
    notComplusoryFieldsScore: notComplusoryFieldWeight,
    totalFieldsScore: totalWeight,
  });
});

export default router;
