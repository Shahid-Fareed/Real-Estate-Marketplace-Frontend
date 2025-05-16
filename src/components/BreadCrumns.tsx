import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  title: string;
  link?: string;
}

interface BreadcrumbsProps {
  breadcrumbData: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbData }) => {
  return (
    <section style={{ background: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ol
              className="breadcrumb d-xl-flex justify-content-xl-start align-items-xl-start pt-xl-3"
              style={{ paddingTop: 10 }}
            >
              {breadcrumbData.map((breadcrumb, index) => (
                <li
                  className={`breadcrumb-item ${
                    index === breadcrumbData.length - 1 ? "active" : ""
                  }`}
                  key={index}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {breadcrumb.link ? (
                    <Link style={{ textDecoration: "none" }} to={breadcrumb.link}>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "#000000cc",
                        }}
                      >
                        {breadcrumb.title}
                      </span>
                    </Link>
                  ) : (
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#000000cc",
                      }}
                    >
                      {breadcrumb.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
