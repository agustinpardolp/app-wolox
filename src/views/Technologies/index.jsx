import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
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

import ToastNotification from "../../components/ToastNotification";
import { REQUEST_STATUS } from "../../constants";
import { fetchTechnologies } from "../../store/actions/technologiesActions";

const Technologies = ({
  technologiesList,
  fetchTechnologies,
  deleteImage,
  status,
}) => {
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
          <li>
            {" "}
            <Card imgUrl={tech.logo}>
              <StyledInfoContainer>
                <h4>{tech.tech}</h4>
                <p>
                  Created in {tech.year} by {tech.author}
                  <span>Licenced by {tech.license}</span>
                </p>
                <span>
                  {" "}
                  <strong> Category: </strong>
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
            label={"Buscar tecnologias"}
            type="search"
          />
          <CheckBox handleClick={handleClick} label={"Ordenar de a-z"} />
        </StyledSearchContainer>
        <Divider disableShadow={true} />
        <ul>{handleOrder(searchResult || technologiesList)}</ul>
      </StyledContainer>
      <StyledTotal>
        <span>
          Total de tecnologias:{" "}
          {handleOrder(searchResult || technologiesList).length
            ? handleOrder(searchResult || technologiesList).length
            : 0}
        </span>
      </StyledTotal>
      <ToastNotification />
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

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
