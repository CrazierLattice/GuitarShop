const { guitarModel } = require("../models/guitar.model");
const { categoryModel } = require("../models/category.model");

const insert_guitars_toDB = async () => {
  //Get all the categories ids
  const electric_category = await categoryModel.findOne({
    name: "Electric Guitars",
  });
  const acoustic_category = await categoryModel.findOne({
    name: "Acoustic Guitars",
  });
  const classic_category = await categoryModel.findOne({
    name: "Classic Guitars",
  });
  const bass_category = await categoryModel.findOne({ name: "Bass Guitars" });
  //Insert guitars to electric_category
  console.log(electric_category);
  const guitar_one = new guitarModel({
    name: "Fender JT-300MDB Jay Turser",
    category: electric_category._id,
    price: "700",
    picture: "https://peimot.com/Cat_471170_4784.png",
  });
  const guitar_two = new guitarModel({
    name: "Ibanez CORT X-2BK-LH H,H",
    category: acoustic_category._id,
    price: "1300",
    picture: "https://sound-check.co.il/wp-content/uploads/2020/04/6454.jpg",
  });
  const guitar_three = new guitarModel({
    name: "Gibson Custom 1968 Les Paul Custom Reissue - Ebony",
    category: classic_category._id,
    price: "3500",
    picture: "https://www.kley-zemer.co.il/Media/Uploads/2523-57-78(1).png",
  });

  const guitar_four = new guitarModel({
    name: "Fender American Elite Jazz Bass Black",
    category: bass_category._id,
    price: "6900",
    picture:
      "https://www.kley-zemer.co.il/Media/Uploads/0197002706_gtr_frt_001_rr(1).jpg",
  });
  await guitar_one.save();
  await guitar_two.save();
  await guitar_three.save();
  await guitar_four.save();
};

module.exports = { insert_guitars_toDB };
