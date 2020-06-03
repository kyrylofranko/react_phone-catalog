import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProducts } from '../../redux';
import { DIRECTIONS, SHOWCASE_HEADINGS } from '../../common/constants';

const STEP = 2;
const FRAME_SIZE = 4;
const MARGIN_WIDTH = 16;
const ANIMATION_DURATION = 700;

export const useShowcaseBlock = (title?: string, selectedProduct?: Product) => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector(getProducts);
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const itemWidth = useMemo(() => width + MARGIN_WIDTH, [width]);

  const hotPricesProducts: Product[] = useMemo(() => {
    return products.filter(product => product.discount !== 0);
  }, [products]);

  const newProducts: Product[] = useMemo(() => {
    return products
      .filter(product => product.age < 10 && !product.discount);
  }, [products]);

  const alsoLikeProducts: Product[] = useMemo(() => {
    if (!selectedProduct) {
      return [];
    }

    const selectedProductPrice = selectedProduct.price;
    const selectedProductName = selectedProduct.name;

    return products
      .filter(product => (product.price - 150 <= selectedProductPrice)
        && (product.price + 150 >= selectedProductPrice)
        && (selectedProductName !== product.name)
        && product.type);
  }, [products, selectedProduct]);

  const currentProducts: Product[] = useMemo(() => {
    switch (title) {
      case SHOWCASE_HEADINGS.hotPrices:
        return hotPricesProducts;

      case SHOWCASE_HEADINGS.newModels:
        return newProducts;

      case SHOWCASE_HEADINGS.alsoLike:
        return alsoLikeProducts;

      default:
        return [];
    }
  }, [title, hotPricesProducts, newProducts, alsoLikeProducts]);

  const stepWidth = useMemo(() => itemWidth * STEP, [itemWidth]);
  const frameWidth = useMemo(() => itemWidth * FRAME_SIZE, [itemWidth]);
  const carouselWidth = useMemo(() => itemWidth * currentProducts.length,
    [itemWidth, currentProducts]);
  const maxPosition = useMemo(() => frameWidth - carouselWidth,
    [frameWidth, carouselWidth]);

  const productCardRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const handleSlide = useCallback((direction: string) => {
    if (direction === DIRECTIONS.left) {
      if (position + stepWidth > 0) {
        setPosition(0);
      } else {
        setPosition(position + stepWidth);
      }
    } else if (position - stepWidth < maxPosition) {
      setPosition(maxPosition);
    } else {
      setPosition(position - stepWidth);
    }
  }, [position, maxPosition, stepWidth]);

  return {
    currentProducts,
    position,
    step: STEP,
    itemWidth,
    animationDuration: ANIMATION_DURATION,
    handleSlide,
    maxPosition,
    productCardRef,
    frameSize: FRAME_SIZE,
  };
};
