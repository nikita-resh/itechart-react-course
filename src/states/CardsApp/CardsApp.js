import React, { useEffect, useState, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { apiClient } from "../../apiClient/apiClient";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import AddCard from "../../components/AddCard/AddCard";
import Dialog from "../Dialog/Dialog";
import EditDialog from "../EditDialog/EditDialog";
import SideBar from "../../components/SideBar/SideBar";
import Tabs from "../Tabs/Tabs";
import { ParticularCard } from "../../components/Card/Card";

const CardsApp = () => {
  const [isCreateModeOpen, setIsCreateModeOpen] = useState(false);
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleCreateDialog = () => {
    setIsCreateModeOpen((state) => !state);
  };

  const togggleEditDialog = () => {
    setIsEditModeOpen((state) => !state);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen((state) => !state);
  };

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    let isUnmounted = false;
    apiClient.cards
      .getAll()
      .then((res) => res.data)
      .then((cards) => {
        if (!isUnmounted) {
          setCardList(cards.slice(0, 10));
        }
      })
      .catch((e) => console.log(e.message));

    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <>
      <Header
        cardList={cardList}
        setCardList={setCardList}
        toggleSideBar={toggleSideBar}
      />
      <Tabs cards={cardList} />
      <Switch>
        <Route path={"/cards/:id"}>
          <ParticularCard
            cardList={cardList}
            editMode={togggleEditDialog}
            setSelected={setSelected}
          />
        </Route>
        <Route path={"/cards"}>
          <Cards
            cardList={cardList}
            editMode={togggleEditDialog}
            setSelected={setSelected}
          />
        </Route>
      </Switch>
      <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      <AddCard handleClickOpen={toggleCreateDialog} />
      <Dialog
        handleClose={toggleCreateDialog}
        isOpen={isCreateModeOpen}
        cardList={cardList}
        setCardList={setCardList}
      />
      <EditDialog
        isOpen={isEditModeOpen}
        handleClose={togggleEditDialog}
        selected={selected}
        cardList={cardList}
        setCardList={setCardList}
      />
    </>
  );
};

export default CardsApp;
