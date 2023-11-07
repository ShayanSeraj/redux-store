import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

export default function ProductSectionItem({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="w-96">
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="gray" className="font-medium" textGradient>
              Size left : {defaultSize}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color :{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    name: name,
                    img: img,
                    text: text,
                    size: defaultSize,
                    color: defaultColor,
                    price: price,
                    amount: 1,
                    totalPrice: price,
                  })
                )
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
