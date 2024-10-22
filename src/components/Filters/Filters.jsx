import { useState } from "react";
import styles from "./Filters.module.css";

function Filters({ products, setProducts }) {
    const [filters, setFilters] = useState({
        from: '',
        to: '',
        discounted: false,
        sorted: '1',
    });

    const [initialProducts] = useState(products);

    const applyFilters = (newFilters) => {
        let filteredProducts = [...initialProducts];

        const fromPrice = parseFloat(newFilters.from);
        const toPrice = parseFloat(newFilters.to);

        if (!isNaN(fromPrice)) {
            filteredProducts = filteredProducts.filter(product => {
                const price = (product.discountPrice ? product.discountPrice : product.price);
                return price >= fromPrice;
            });
        }

        if (!isNaN(toPrice)) {
            filteredProducts = filteredProducts.filter(product => {
                const price = (product.discountPrice ? product.discountPrice : product.price);
                return price <= toPrice;
            });
        }

        if (newFilters.discounted) {
            filteredProducts = filteredProducts.filter(product => product.discountPrice);
        }

        switch (newFilters.sorted) {
            case '2':
                filteredProducts.sort((first, second) => new Date(second.dateAdded) - new Date(first.dateAdded));
                break;
            case '3':
                filteredProducts.sort((first, second) => {
                    const firstPrice = (first.discountPrice ? first.discountPrice : first.price);
                    const secondPrice = (second.discountPrice ? second.discountPrice : second.price);
                    return secondPrice - firstPrice;
                });
                break;
            case '4':
                filteredProducts.sort((first, second) => {
                    const firstPrice = (first.discountPrice ? first.discountPrice : first.price);
                    const secondPrice = (second.discountPrice ? second.discountPrice : second.price);
                    return firstPrice - secondPrice;
                });
                break;
            default:
                break;
        }

        setProducts(filteredProducts);
    };

    const handlePriceFromChange = (event) => {
        const newFilters = { ...filters, from: event.target.value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const handlePriceToChange = (event) => {
        const newFilters = { ...filters, to: event.target.value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const handleDiscountedChange = (event) => {
        const newFilters = { ...filters, discounted: event.target.checked };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const handleSortedChange = (event) => {
        const newFilters = { ...filters, sorted: event.target.value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    return (
        <form className={styles.filters}>
            <label htmlFor="from">Price</label>
            <input
                type="text"
                id="from"
                placeholder="from"
                value={filters.from}
                onChange={handlePriceFromChange}
            />
            <input
                type="text"
                id="to"
                placeholder="to"
                value={filters.to}
                onChange={handlePriceToChange}
            />
            <label htmlFor="discounted">Discounted items</label>
            <input
                type="checkbox"
                id="discounted"
                checked={filters.discounted}
                onChange={handleDiscountedChange}
            />
            <label htmlFor="sorted">Sorted</label>
            <select
                name="sorted"
                id="sorted"
                value={filters.sorted}
                onChange={handleSortedChange}
            >
                <option value="1">by default</option>
                <option value="2">newest</option>
                <option value="3">price high-low</option>
                <option value="4">price low-high</option>
            </select>
        </form>
    );
}

export default Filters;

