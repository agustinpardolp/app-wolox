import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { FormattedMessage } from "react-intl";
import Card from "../../components/Card";
import {
  StyledContainer,
  StyledTechnologies,
  StyledInfoContainer,
  StyledSearchContainer,
  StyledTotal,
} from "./styled-components";
import Divider from "../../components/Divider";
import CheckBox from "../../components/Checkbox";
import Input from "../../components/Input";
import { fetchTechnologies } from "../../store/actions/technologiesActions";

const Technologies = ({ technologiesList, fetchTechnologies }) => {
  const [searchResult, setSearchResult] = useState();
  const [order, setOrder] = useState(technologiesList);

  useEffect(() => {
    fetchTechnologies();
  }, [fetchTechnologies]);

  const handleSearch = (e) => {
    let searchArray = technologiesList.filter((tech) => {
      return (
        tech.tech.toLowerCase().includes(e.target.value.toLowerCase()) ||
        tech.type.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setSearchResult(searchArray);
  };

  const handleOrder = useCallback(
    (techArray) => {
      if (order) {
        let orderArray = techArray.sort((a, b) => {
          if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
            return 1;
          } else if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
            return -1;
          } else {
            return 0;
          }
        });
        return techArrayHandler(orderArray);
      } else {
        let orderArray = techArray.sort((a, b) => {
          if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
            return 1;
          } else if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
            return -1;
          } else {
            return 0;
          }
        });
        return techArrayHandler(orderArray);
      }
    },
    [order]
  );
  const handleClick = () => {
    setOrder(!order);
  };
  const techArrayHandler = (techArray) => {
    return techArray && techArray.length ? (
      techArray.map((tech) => {
        return (
          <li key={uuid()}>
            {" "}
            <Card imgUrl={tech.logo}>
              <StyledInfoContainer>
                <h4>{tech.tech}</h4>
                <div>
                  <p>
                    <FormattedMessage
                      id="technologies.created"
                      values={{
                        year: `${tech.year}`,
                        author: `${tech.author}`,
                        licence: `${tech.license}`,
                        span: (word) => word,
                        labelAuthor: (word) => word,
                      }}
                    />
                  </p>
                  <p>
                    <FormattedMessage
                      id="technologies.licence"
                      values={{
                        licence: `${tech.license}`,
                        labelLicence: (word) => word,
                      }}
                    />
                  </p>
                </div>
                <span>
                  {" "}
                  <strong>
                    {" "}
                    <FormattedMessage id="technologies.category" />{" "}
                  </strong>
                  {tech.type}
                </span>
              </StyledInfoContainer>
            </Card>
          </li>
        );
      })
    ) : (
      <li>
        <span>{"No hay resultados"}</span>{" "}
      </li>
    );
  };
  return (
    <StyledTechnologies>
      <StyledContainer>
        <StyledSearchContainer>
          <Input
            handleChange={handleSearch}
            label={"technologies.search"}
            type="search"
          />
          <CheckBox handleClick={handleClick} label={"technologies.order"} />
        </StyledSearchContainer>
        <Divider disableShadow={true} />
        <ul>{handleOrder(searchResult || technologiesList)}</ul>
      </StyledContainer>
      <StyledTotal>
        <span>
          <FormattedMessage id="technologies.total" />{" "}
          {handleOrder(searchResult || technologiesList).length
            ? handleOrder(searchResult || technologiesList).length
            : 0}
        </span>
      </StyledTotal>
    </StyledTechnologies>
  );
};

export const mapStateToProps = (state) => {
  const {
    technologies: { data: technologiesList, status },
  } = state;

  return {
    technologiesList,
    status,
  };
};

export const mapDispatchToProps = {
  fetchTechnologies,
};

Technologies.propTypes = {
  technologiesList: PropTypes.array,
  fetchTechnologies: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
