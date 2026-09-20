import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid.jsx";
import { categories, products } from "../data/products.js";
import "./Collection.css";

const FILTERS = [
  { id: "all", name: "All" },
  ...categories.map((c) => ({ id: c.id, name: c.name })),
];

const SORTS = [
  { id: "featured", name: "Featured" },
  { id: "newest", name: "Newest" },
  { id: "price-asc", name: "Price: Low to High" },
  { id: "price-desc", name: "Price: High to Low" },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlFilter = searchParams.get("filter") || "all";
  const query = searchParams.get("q") || "";

  const [filter, setFilter] = useState(urlFilter);
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setFilter(urlFilter);
  }, [urlFilter]);

  const handleFilter = (id) => {
    setFilter(id);
    setSearchParams(id === "all" ? {} : { filter: id });
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (query) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (filter === "new") {
      list = list.filter((p) => p.isNew);
    } else if (filter !== "all") {
      list = list.filter((p) => p.category === filter);
    }

    switch (sort) {
      case "newest":
        list = list.filter((p) => p.isNew).concat(list.filter((p) => !p.isNew));
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return list;
  }, [filter, sort, query]);

  return (
    <main className="page collection-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <span>Collection</span>
        </nav>

        <div className="collection-head">
          <h1 className="section-title">
            {query ? `Results for "${query}"` : "Shop Collection"}
          </h1>
          <p className="section-sub">
            Considered pieces for every part of your week — from desk to
            dinner to weekend.
          </p>
        </div>

        <div className="collection-toolbar">
          <div className="filter-pills">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-pill ${filter === f.id && !query ? "active" : ""}`}
                onClick={() => handleFilter(f.id)}
              >
                {f.name}
              </button>
            ))}
          </div>

          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                Sort: {s.name}
              </option>
            ))}
          </select>
        </div>

        <p className="result-count">{filtered.length} products</p>

        <ProductGrid products={filtered} />
      </div>
    </main>
  );
}
