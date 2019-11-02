import React, { useState } from "react";
import Table from "../../components/Tables";
import { Button, Search, Pagination, Link } from "carbon-components-react";
import { Renew16, SettingsAdjust16, Settings16 } from "@carbon/icons-react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import PageHeader from "../../components/PageHeader";

import db from "../../db/db";

const REPO_QUERY = gql`
  query REPO_QUERY {
    # Let's use carbon as our organization
    organization(login: "carbon-design-system") {
      # We'll grab all the repositories in one go. To load more resources
      # continuously, see the advanced topics.
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          homepageUrl
          name
          updatedAt
          createdAt
        }
      }
    }
  }
`;

const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: "flex" }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

const getRowItems = rows =>
  rows.map(row => ({
    key: row.id,
    name: row.name,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
    stars: Math.floor(Math.random() * 1000),
    issueCount: Math.floor(Math.random() * 1000),
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />
  }));

const LandingPage = () => {
  const { headers } = db;

  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  return (
    <div className="bx--grid bx--grid--full-width cloudpal-page">
      <div className="bx--row cloudpal-page__r1">
        <div className="bx--col-lg-16">
          <PageHeader title="Basic" />
        </div>
      </div>
      <div className="bx--row cloudpal-page__r2">
        <div className="search__container">
          <Search light={true} className="search__component" labelText="" />
        </div>
        <div className="button__container--actions">
          <Button className="bx--btn bx--btn--ghost">
            <SettingsAdjust16 />
          </Button>
          <Button className="bx--btn bx--btn--ghost button--renew">
            <Renew16 />
          </Button>
          <Button className="bx--btn bx--btn--ghost">
            <Settings16 />
          </Button>
        </div>
      </div>

      <div className="bx--row cloudpal-page__r3">
        <div className="bx--col-lg-16">
          <Query query={REPO_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";

              if (error) return `Error! ${error.message}`;

              let rows = [];
              if (data) {
                setTotalItems(50);
                rows = getRowItems(data.organization.repositories.nodes);
              }

              return (
                <>
                  <Table
                    headers={headers}
                    rows={rows.slice(
                      firstRowIndex,
                      firstRowIndex + currentPageSize
                    )}
                  />
                  <Pagination
                    totalItems={totalItems}
                    backwardText="Previous page"
                    forwardText="Next page"
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 25]}
                    itemsPerPageText="Items per page"
                    onChange={({ page, pageSize }) => {
                      if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                      }
                      setFirstRowIndex(pageSize * (page - 1));
                    }}
                  />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
