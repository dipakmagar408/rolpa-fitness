import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Radio,
} from "@material-tailwind/react";

const offers = [
  {
    title: "100 Diamonds Pack",
    originalPrice: "Rs. 120",
    offerPrice: "Rs. 99",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "310 Diamonds Pack",
    originalPrice: "Rs. 350",
    offerPrice: "Rs. 199",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "520 Diamonds Pack",
    originalPrice: "Rs. 580",
    offerPrice: "Rs. 399",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "1060 Diamonds Pack",
    originalPrice: "Rs. 1100",
    offerPrice: "Rs. 849",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "2180 Diamonds Pack",
    originalPrice: "Rs. 2100",
    offerPrice: "Rs. 1599",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "5600 Diamonds Pack",
    originalPrice: "Rs. 5200",
    offerPrice: "Rs. 4299",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "Elite Pass + 100 Diamonds",
    originalPrice: "Rs. 999",
    offerPrice: "Rs. 799",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
  {
    title: "Weekly Membership (420 Diamonds)",
    originalPrice: "Rs. 480",
    offerPrice: "Rs. 349",
    image: "https://www.vhv.rs/dpng/d/59-591416_diamond-free-fire-png-transparent-png.png",
  },
];

const esewaQR = "https://c2c.fp.guinfra.com/file/646dfa629781de01e64909f4UlxBcMy903?fop=imageView/2/w/340/h/340";
const phonepayQR = "https://i.imgur.com/WxGCD2T.png";

const Service = () => {
  const [open, setOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleBuyNow = (offer) => {
    setSelectedOffer(offer);
    setOpen(true);
    setUid("");
    setName("");
    setConfirmed(false);
    setPaymentMethod("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    if (!uid.trim() || !name.trim()) {
      alert("Please enter your UID and Game Name.");
      return;
    }
    setConfirmed(true);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen">
      {offers.map((offer, index) => (
        <Card key={index} className="w-72 bg-white shadow-md">
          <CardHeader floated={false} className="h-44 bg-blue-gray-50">
            <img src={offer.image} alt={offer.title} className="object-contain w-full h-full" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h6" color="blue-gray">
              {offer.title}
            </Typography>
            <Typography className="line-through text-red-500 text-sm">
              {offer.originalPrice}
            </Typography>
            <Typography className="text-green-600 font-bold text-lg">
              {offer.offerPrice}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Button size="sm" onClick={() => handleBuyNow(offer)}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ))}

      <Dialog open={open} handler={handleClose}>
        <DialogHeader>{selectedOffer?.title}</DialogHeader>
        <DialogBody className="space-y-4">
          {!confirmed && (
            <>
              <Input
                label="Free Fire UID"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              />
              <Input
                label="Free Fire Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button color="green" onClick={handleConfirm}>
                Confirm
              </Button>
            </>
          )}

          {confirmed && (
            <>
              <Typography className="font-semibold">Select Payment Method:</Typography>
              <div className="flex gap-4">
                <Radio
                  name="payment"
                  label="eSewa"
                  value="esewa"
                  checked={paymentMethod === "esewa"}
                  onChange={() => setPaymentMethod("esewa")}
                />
                <Radio
                  name="payment"
                  label="PhonePay"
                  value="phonepay"
                  checked={paymentMethod === "phonepay"}
                  onChange={() => setPaymentMethod("phonepay")}
                />
              </div>

              {paymentMethod === "esewa" && (
                <div className="text-center">
                  <img src={esewaQR} alt="eSewa QR" className="w-40 mx-auto my-2" />
                  <Typography variant="small">Pay to: <strong>9844815108 (eSewa)</strong></Typography>
                </div>
              )}

              {paymentMethod === "phonepay" && (
                <div className="text-center">
                  <img src={phonepayQR} alt="PhonePay QR" className="w-40 mx-auto my-2" />
                  <Typography variant="small">Pay to: <strong>9844815108 (PhonePay)</strong></Typography>
                </div>
              )}
            </>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={handleClose} className="mr-2">
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Service;
