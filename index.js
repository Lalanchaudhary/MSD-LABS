const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Test = require("./models/TestData");
const Alltest = require("./models/AlltestData");
const path = require("path");

// import { config } from "dotenv";
// import { PaymentRouter } from './routes/PhonePeRoute.js';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use("/api",PaymentRouter)
// config({path:"./config/config.env"})


app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
  


app.listen(9000, () => {
    console.log("App is running at 9000");
})

// const DB='mongodb+srv://chaudharylalan28:AvR95me4CrQ4DScI@cluster0.qc2emta.mongodb.net/datainfo?retryWrites=true&w=majority&appName=Cluster0'
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     UseUnifiedTopology:true,
//     useFindAndModifying:false
// })
//     .then(() => {
//         console.log("Database is Connected");
//     })
//     .catch((err)=>{
//         console.log("error in DB",err);
//     })

// app.get("/data", async (req, res) => {
//     // try {
//     //     const data = await Test.find();
//     //     res.send(data);
//     // }
//     // catch (err) {
//     //     console.log("data lete time", err);
//     // }
//     res.send(AllData);

// })

const AllData=[{
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c0c"
    },
    "title": "Adenosine Deaminase (ADA)-Serum  ",
    "Body": "This test measures ADA levels in pleural fluids to help diagnose & monitor tuberculosis (TB).",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c0d"
    },
    "title": "Adenosine Deaminase (ADA)-Pericardial Fluid  ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c0e"
    },
    "title": "Adenosine Deaminase (ADA)-AF   ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c0f"
    },
    "title": "Adenosine Deaminase (ADA)-CSF ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c10"
    },
    "title": "Adenosine Deaminase (ADA)-PF  ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c11"
    },
    "title": "Adenosine Deaminase (ADA)-PUS",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c12"
    },
    "title": "Adreno Corticotropic Hormone (ACTH)",
    "Body": "Measures ACTH levels to diagnose adrenal and pituitary gland disorders like Cushing's syndrome.",
    "price": 1500,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c13"
    },
    "title": "Alanine Transaminase (ALT/SGPT)",
    "Body": "The tests check liver functioning and help diagnose liver diseases.",
    "price": 160,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c14"
    },
    "title": "Albumin-Serum",
    "Body": "It plays an important role in keeping the fluid in the blood from leaking into the tissues. ",
    "price": 160,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c15"
    },
    "title": "Alkaline Phosphatase",
    "Body": "It checks abnormal alkaline phosphate enzyme levels & diagnoses liver or bone diseases. ",
    "price": 170,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c16"
    },
    "title": "Alpha Feto Protein (AFP) ",
    "Body": "The test diagnoses conditions such as germ cell tumors in the central nervous system, including the brain and spinal cord. ",
    "price": 800,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c17"
    },
    "title": "Alpha Feto Protein (AFP) Test CSF ",
    "Body": "The test diagnoses conditions such as germ cell tumors in the central nervous system, including the brain and spinal cord. ",
    "price": 800,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c18"
    },
    "title": "Amylase-Serum ",
    "Body": "This test helps diagnose or monitor acute & chronic pancreatitis & other pancreatic diseases. ",
    "price": 400,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661d81a9a96abf96a9dc9c19"
    },
    "title": "Amylase-Urine Random",
    "Body": "Urinary amylase is useful in the consideration of macroamylasemia",
    "price": 400,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Urine",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1330"
    },
    "title": "Ammonia - Plasma ",
    "Body": "Ammonia is a waste product of protein catabolism; it is potentially toxic to the central nervous system. Increased plasma ammonia may be indicative of hepatic encephalopathy, hepatic coma in terminal stages of liver cirrhosis, hepatic failure, acute and subacute liver necrosis, and Reye's syndrome.",
    "price": 1000,
    "fasting": "Not required",
    "report": "60 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1331"
    },
    "title": "Anti-Mullerian Hormone (AMH) ",
    "Body": "What is a Good AMH Level to Get Pregnant? If you're having AMH levels between 1.0-4.0 ng/ml, it is considered as a good or normal AMH level to get pregnant. AMH levels below 1.0ng/ml result in low egg count and are an indication of diminishing ovarian reserve.",
    "price": 1850,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1332"
    },
    "title": "Angiotensin Converting Enzyme (ACE) - Serum ",
    "Body": "The angiotensin-converting enzyme (ACE) test is primarily ordered to help diagnose and monitor sarcoidosis. It is often ordered as part of an investigation into the cause of a group of troubling chronic symptoms that are possibly due to sarcoidosis.",
    "price": 1050,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1333"
    },
    "title": "Adenosine Deaminase (ADA)-Pericardial Fluid  ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1334"
    },
    "title": "Androstenedione (A4)",
    "Body": "What does the AndrostenedioneA4Serum test measure? The Androstenedione (A4) Serum test measures the level of androstenedione in the blood which is a hormone that is produced by the adrenal gland and the ovaries (in women) and testes (in men).",
    "price": 1800,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1335"
    },
    "title": "Anti-Streptolysin O Titres ASO-Titers",
    "Body": "Antistreptolysin O (ASO) titer is a blood test to measure antibodies against streptolysin O, a substance produced by group A streptococcus bacteria. Antibodies are proteins our bodies produce when they detect harmful substances, such as bacteria.",
    "price": 550,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1336"
    },
    "title": "Anti TPO (Anti Thyroperoxidase/ Microsomal) ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1337"
    },
    "title": "Adenosine Deaminase (ADA)-PUS",
    "Body": "Thyroid peroxidase is a type of protein (called an enzyme) that cells in the thyroid gland use to make thyroid hormone. If these enzymes leak out into the bloodstream (as when thyroid cells are damaged) the immune system makes antibodies against these proteins.",
    "price": 1100,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1338"
    },
    "title": "Anti-thrombin III (A T III) (Antigenic)",
    "Body": "Antithrombin III Antigen - Aids in characterization of Antithrombin deficiency (AT, previously referred to as Antithrombin III) which is associated with increased thrombotic risk. Type I deficiency is characterized by reduction in activity and antigen levels simultaneously.",
    "price": 3800,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a1339"
    },
    "title": "Antithyroglobulin Antibodies (ATG) ",
    "Body": "Measures specific antibodies targeting TSH receptors to diagnose thyroid disorders like Graves's disease.",
    "price": 1200,
    "fasting": "Not required",
    "report": "4 days",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133a"
    },
    "title": "Aspartate Aminotransferase (AST/SGOT)",
    "Body": "AST, or aspartate aminotransferase, is one of the two liver enzymes. It is also known as serum glutamic-oxaloacetic transaminase, or SGOT. AST is a protein made by liver cells.",
    "price": 160,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133b"
    },
    "title": "Apolipoproteins B (APO-B)",
    "Body": "[1] Apolipoprotein B (ApoB) is the primary apolipoprotein and is the carrier for the following lipids: chylomicrons, low-density lipoprotein ( LDL), very low-density lipoprotein (VLDL), intermediate-density lipoprotein (IDL), and lipoprotein (a). ApoB is not found in high-density lipoproteins (HDL). ",
    "price": 500,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133c"
    },
    "title": "Apolipoproteins A1 (APO-A1)  ",
    "Body": "Apolipoprotein A-I (Apo-A1) is a structural and functional protein that constitutes approximately 70% of the protein in high density lipoprotein (HDL). The reference ranges of Apo-A1 are as follows : Adult males: 75-160 mg/dL.",
    "price": 500,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133d"
    },
    "title": "B type Natriuretic Peptide (BNP) ",
    "Body": "B-type natriuretic peptide (BNP) belongs to a family of protein hormones called natriuretic peptides.",
    "price": 3000,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133e"
    },
    "title": "Beta Human Chorionic Gonadotropin - Serum",
    "Body": "The human chorionic gonadotropin (hCG) test is also known as the pregnancy test. The hCG test can be a blood or urine test. The hCG test can be done to detect and monitor pregnancy. It can also be used to detect and monitor some types of cancer.",
    "price": 700,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661e3d1af713f879b78a133f"
    },
    "title": "Beta Human Chorionic Gonadotropin - Urine ",
    "Body": "The human chorionic gonadotropin (hCG) test is also known as the pregnancy test. This test measures the amount of the hormone hCG in your urine or blood. The hCG test can be used to both confirm and monitor a pregnancy. hCG is usually present only when a female is pregnant.",
    "price": 700,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299a"
    },
    "title": "Ammonia - Plasma ",
    "Body": "Ammonia is a waste product of protein catabolism; it is potentially toxic to the central nervous system. Increased plasma ammonia may be indicative of hepatic encephalopathy, hepatic coma in terminal stages of liver cirrhosis, hepatic failure, acute and subacute liver necrosis, and Reye's syndrome.",
    "price": 1000,
    "fasting": "Not required",
    "report": "60 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299b"
    },
    "title": "Anti-Mullerian Hormone (AMH) ",
    "Body": "What is a Good AMH Level to Get Pregnant? If you're having AMH levels between 1.0-4.0 ng/ml, it is considered as a good or normal AMH level to get pregnant. AMH levels below 1.0ng/ml result in low egg count and are an indication of diminishing ovarian reserve.",
    "price": 1850,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299c"
    },
    "title": "Angiotensin Converting Enzyme (ACE) - Serum ",
    "Body": "The angiotensin-converting enzyme (ACE) test is primarily ordered to help diagnose and monitor sarcoidosis. It is often ordered as part of an investigation into the cause of a group of troubling chronic symptoms that are possibly due to sarcoidosis.",
    "price": 1050,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299d"
    },
    "title": "Adenosine Deaminase (ADA)-Pericardial Fluid  ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299e"
    },
    "title": "Androstenedione (A4)",
    "Body": "What does the AndrostenedioneA4Serum test measure? The Androstenedione (A4) Serum test measures the level of androstenedione in the blood which is a hormone that is produced by the adrenal gland and the ovaries (in women) and testes (in men).",
    "price": 1800,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Fluids, Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b299f"
    },
    "title": "Anti-Streptolysin O Titres ASO-Titers",
    "Body": "Antistreptolysin O (ASO) titer is a blood test to measure antibodies against streptolysin O, a substance produced by group A streptococcus bacteria. Antibodies are proteins our bodies produce when they detect harmful substances, such as bacteria.",
    "price": 550,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a0"
    },
    "title": "Anti TPO (Anti Thyroperoxidase/ Microsomal) ",
    "Body": "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
    "price": 650,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a1"
    },
    "title": "Adenosine Deaminase (ADA)-PUS",
    "Body": "Thyroid peroxidase is a type of protein (called an enzyme) that cells in the thyroid gland use to make thyroid hormone. If these enzymes leak out into the bloodstream (as when thyroid cells are damaged) the immune system makes antibodies against these proteins.",
    "price": 1100,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": "Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a2"
    },
    "title": "Anti-thrombin III (A T III) (Antigenic)",
    "Body": "Antithrombin III Antigen - Aids in characterization of Antithrombin deficiency (AT, previously referred to as Antithrombin III) which is associated with increased thrombotic risk. Type I deficiency is characterized by reduction in activity and antigen levels simultaneously.",
    "price": 3800,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a3"
    },
    "title": "Antithyroglobulin Antibodies (ATG) ",
    "Body": "Measures specific antibodies targeting TSH receptors to diagnose thyroid disorders like Graves's disease.",
    "price": 1200,
    "fasting": "Not required",
    "report": "4 days",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a4"
    },
    "title": "Aspartate Aminotransferase (AST/SGOT)",
    "Body": "AST, or aspartate aminotransferase, is one of the two liver enzymes. It is also known as serum glutamic-oxaloacetic transaminase, or SGOT. AST is a protein made by liver cells.",
    "price": 160,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a5"
    },
    "title": "Apolipoproteins B (APO-B)",
    "Body": "[1] Apolipoprotein B (ApoB) is the primary apolipoprotein and is the carrier for the following lipids: chylomicrons, low-density lipoprotein ( LDL), very low-density lipoprotein (VLDL), intermediate-density lipoprotein (IDL), and lipoprotein (a). ApoB is not found in high-density lipoproteins (HDL). ",
    "price": 500,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a6"
    },
    "title": "Apolipoproteins A1 (APO-A1)  ",
    "Body": "Apolipoprotein A-I (Apo-A1) is a structural and functional protein that constitutes approximately 70% of the protein in high density lipoprotein (HDL). The reference ranges of Apo-A1 are as follows : Adult males: 75-160 mg/dL.",
    "price": 500,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a7"
    },
    "title": "B type Natriuretic Peptide (BNP) ",
    "Body": "B-type natriuretic peptide (BNP) belongs to a family of protein hormones called natriuretic peptides.",
    "price": 3000,
    "fasting": "Not required",
    "report": "36 hrs",
    "sampleType": " Fluids",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a8"
    },
    "title": "Beta Human Chorionic Gonadotropin - Serum",
    "Body": "The human chorionic gonadotropin (hCG) test is also known as the pregnancy test. The hCG test can be a blood or urine test. The hCG test can be done to detect and monitor pregnancy. It can also be used to detect and monitor some types of cancer.",
    "price": 700,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  },
  {
    "_id": {
      "$oid": "661f7049cf396ce9087b29a9"
    },
    "title": "Beta Human Chorionic Gonadotropin - Urine ",
    "Body": "The human chorionic gonadotropin (hCG) test is also known as the pregnancy test. This test measures the amount of the hormone hCG in your urine or blood. The hCG test can be used to both confirm and monitor a pregnancy. hCG is usually present only when a female is pregnant.",
    "price": 700,
    "fasting": "Not required",
    "report": "12 hrs",
    "sampleType": " Blood",
    "__v": 0
  }];

app.post("/", (req, res) => {

    const { title, Body, price } = req.body;
    const test1 = new Test({
        title: title,
        Body: Body,
        price: price
    })

    test1.save()
        .then((data) => {
            console.log("Hnn ji ho gaya", data);
        })
        .catch((err) => {
            console.log("last time error", err);
        })
})

app.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Alltest.deleteOne({ _id: id })
        .then((res) => {
            console.log(res);
        })
})


app.get("/test", async (req, res) => {
    // try {
    //     const data = await Alltest.find();
    //     res.send(data);
    // }
    // catch (err) {
    //     console.log("data lete time", err);
    // }
    res.send(AllData);

})


app.put("/update/:id",async(req,res)=>{
    const {id}=req.params;
    const {title,Body,price,fasting,report,sampleType }=req.body;
    console.log(id); 
    console.log(req.body);
    await Alltest.updateOne({_id:id},{
      $set:{
        title:title,
        Body: Body,
        price: price,
        fasting: fasting,
        report: report,
        sampleType:sampleType
      }
    })
    .then((res)=>{
      console.log(res);
    })
  })
  
  app.post("/addtest", (req, res) => {

    const { title, Body, price,fasting,report,sampleType } = req.body;
    const test1 = new Alltest({
        title: title,
        Body: Body,
        price: price,
        fasting:fasting,
        report:report,
        sampleType:sampleType
    })

    test1.save()
        .then((data) => {
            console.log("Hnn ji ho gaya", data);
        })
        .catch((err) => {
            console.log("last time error", err);
        })
})