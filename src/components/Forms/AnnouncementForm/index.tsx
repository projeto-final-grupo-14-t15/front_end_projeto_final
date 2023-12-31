import { useForm, useFieldArray } from "react-hook-form";
import { StyledForm } from "./style";
import { IAnnouncementFormProps, announcementsDataForm } from "./types";
import AnnouncementInput from "./AnnouncementInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { announcementSchema } from "./validations";
import {
  Autocomplete,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
} from "@mui/material";
import useKenzieKars from "../../../hooks/useKenzieKars";
import React, { useEffect, useState } from "react";
import { ICar } from "../../../interfaces/KenzieKarsContext.types";
import { CssTextField, StyledParagraph } from "./AnnouncementInput/style";
import { DefaultButton } from "../../DefaultButton";
import useAnnouncements from "../../../hooks/useAnnouncements";
import { IAnnouncementsForm } from "../../../interfaces/announcementsContext.types";

const AnnouncementForm = ({
  submitFunction,
  announcement,
  isCreateForm,
  open,
  setOpen,
}: IAnnouncementFormProps) => {
  const { allBrands, loadingForm, modelsList, getCarsPerBrands, carsList } =
    useKenzieKars();

  const { deleteAnnouncement } = useAnnouncements();

  const [selectedCar, setSelectedCar] = useState<ICar>();
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<announcementsDataForm>({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      brand: announcement?.brand,
      description: announcement?.description,
      model: announcement?.model,
      year: announcement?.year,
      km: announcement?.km?.toString(),
      fuel: announcement?.fuel,
      color: announcement?.color,
      higherThanFipe: announcement?.higherThanFipe,
      price: announcement?.price?.toString(),
      fipePrice: announcement?.fipePrice?.toString(),
      isActive: announcement?.isActive,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "photos",
    control,
  });

  useEffect(() => {
    if (announcement) {
      announcement.photos?.map((photo) => {
        append({
          link: photo.link.toString(),
        });
      });
    } else {
      if (fields.length < 1) {
        append({
          link: "",
        });
      }
    }
    if (
      !isCreateForm &&
      announcement &&
      announcement.id &&
      announcement.model &&
      announcement.brand &&
      announcement.year &&
      announcement.fuel &&
      announcement.fipePrice &&
      announcement.isActive != undefined
    ) {
      setIsActive(announcement.isActive);
      setSelectedCar({
        id: announcement.id.toString(),
        name: announcement?.model,
        brand: announcement?.brand,
        year: announcement?.year,
        fuel: announcement?.fuel,
        value: announcement?.fipePrice,
      });
    }
  }, []);

  useEffect(() => {
    selectedCar && setValue("year", selectedCar?.year);
    selectedCar && !announcement;
    setValue(
      "fuel",
      selectedCar?.fuel == 1
        ? "flex"
        : selectedCar?.fuel == 2
        ? "hibrido"
        : "elétrico"
    );
  }, [selectedCar]);

  const onSubmit = (data: IAnnouncementsForm) => {
    if (isCreateForm) {
      Number(data.price) > Number(selectedCar?.value)
        ? (data.higherThanFipe = true)
        : (data.higherThanFipe = false);
    } else {
      Number(data.price) > Number(data.fipePrice)
        ? (data.higherThanFipe = true)
        : (data.higherThanFipe = false);
    }
    if (selectedCar?.value) {
      data.fipePrice = selectedCar?.value.toString();
    }
    if (isCreateForm) {
      submitFunction(data);
    } else {
      announcement?.id && submitFunction(data, announcement?.id);
    }
    setOpen(false);
  };

  const onDelete = (id: number) => {
    deleteAnnouncement(id);
    setOpen(false);
  };

  return (
    <div>
      {isCreateForm ? (
        <DefaultButton
          text="Criar Anuncio"
          textcolor="--color-brand1"
          type="button"
          backgroundcolor="--color-grey10"
          bordercolor="--color-brand1"
          buttonFunction={handleClickOpen}
        />
      ) : (
        <DefaultButton
          text="Editar"
          textcolor="--color-grey1"
          type="button"
          backgroundcolor="--color-grey8"
          bordercolor="--color-grey1"
          buttonFunction={handleClickOpen}
        />
      )}
      <Dialog open={open} onClose={handleClose} scroll="body">
        {isCreateForm ? (
          <DialogTitle>Cadastre seu veículo</DialogTitle>
        ) : (
          <DialogTitle>Editar anuncio</DialogTitle>
        )}
        <DialogContent>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {isCreateForm ? (
              <div>
                <Autocomplete
                  options={allBrands}
                  filterSelectedOptions
                  {...register("brand")}
                  onChange={(event,value) => {
                    console.log(event)
                    value !== null && setValue("brand", value);
                    getCarsPerBrands(value);
                  }}
                  renderInput={(params) => (
                    <CssTextField {...params} label="Marca" />
                  )}
                />
                {errors.brand && (
                  <StyledParagraph $fontColor="red">
                    {errors.brand.message}
                  </StyledParagraph>
                )}
              </div>
            ) : (
              <CssTextField
                {...register("brand")}
                id="outlined-basic"
                label="Marca"
                variant="outlined"
                value={selectedCar?.brand}
                disabled={true}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => {
                  setValue("brand", event.target.value);
                }}
              />
            )}
            {isCreateForm ? (
              <div>
                
              <Autocomplete
                options={modelsList}
                filterSelectedOptions
                {...register("model")}
                disabled={modelsList.length === 0}
                loading={loadingForm}
                onChange={(event, value) => {
                  console.log(event)
                  value !== null && setValue("model", value);
                  setSelectedCar(carsList.find((car) => car.name === value));
                  const fipePrice = carsList.find(
                    (car) => car.name === value
                  )?.value;
                  if (fipePrice) {
                    setValue("fipePrice", fipePrice.toString());
                  }
                }}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label="Modelo"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loadingForm ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
              {errors.model && (
                <StyledParagraph $fontColor="red">
                  {errors.model.message}
                </StyledParagraph>
              )}
              </div>
            ) : (
              <CssTextField
                {...register("model")}
                id="outlined-basic"
                label="Modelo"
                variant="outlined"
                value={announcement?.model}
                disabled={true}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => {
                  setValue("model", event.target.value);
                }}
              />
            )}
            <span className="pairInputBox">
              <CssTextField
                {...register("year")}
                id="outlined-basic"
                label="Ano"
                variant="outlined"
                value={selectedCar?.year}
                disabled={true}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => {
                  setValue("year", event.target.value);
                }}
              />
              <CssTextField
                {...register("fuel")}
                id="outlined-basic"
                label="Combustível"
                variant="outlined"
                value={
                  selectedCar?.fuel == 1
                    ? "flex"
                    : selectedCar?.fuel == 2
                    ? "hibrido"
                    : "elétrico"
                }
                disabled={true}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => {
                  setValue("fuel", event.target.value);
                }}
              />
            </span>
            <span className="pairInputBox">
              <AnnouncementInput
                label="Quilometragem"
                type="text"
                register={register("km")}
                error={errors.km}
              />
              <AnnouncementInput
                label="Cor"
                type="text"
                register={register("color")}
                error={errors.color}
              />
            </span>
            <span className="pairInputBox">
              <>
                <CssTextField
                  id="outlined-basic"
                  label="Preço tabela FIPE"
                  variant="outlined"
                  {...register(`fipePrice`)}
                  value={selectedCar?.value}
                  defaultValue={announcement?.fipePrice}
                  disabled={true}
                  onChange={(event) => {
                    setValue("fipePrice", event.target.value);
                  }}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
                {errors.fipePrice && (
                  <StyledParagraph $fontColor="red">
                    {errors.fipePrice?.message}
                  </StyledParagraph>
                )}
              </>
              <AnnouncementInput
                label="Preço"
                type="text"
                register={register("price")}
                error={errors.price}
              />
            </span>

            <AnnouncementInput
              label="Descrição"
              type="text"
              register={register("description")}
              error={errors.description}
            />
            <div className="is-active-box">
              {!isCreateForm && <DialogTitle>Anuncio ativo:</DialogTitle>}
              {!isCreateForm && (
                <div className="radioContainer">
                  <span
                    style={{ display: "flex", gap: "10px", height: "35px" }}
                  >
                    <DefaultButton
                      buttonFunction={() => {
                        setIsActive(true);
                        setValue("isActive", true);
                      }}
                      backgroundcolor={
                        isActive ? "--color-brand1" : "--color-grey6"
                      }
                      bordercolor={
                        isActive ? "--color-brand1" : "--color-grey6"
                      }
                      textcolor={
                        isActive ? "--color-whiteFixed" : "--color-grey2"
                      }
                      text="Sim"
                      type="button"
                    />
                    <DefaultButton
                      buttonFunction={() => {
                        setIsActive(false);
                        setValue("isActive", false);
                      }}
                      backgroundcolor={
                        isActive ? "--color-grey6" : "--color-brand1"
                      }
                      bordercolor={
                        isActive ? "--color-grey6" : "--color-brand1"
                      }
                      textcolor={
                        isActive ? "--color-grey2" : "--color-whiteFixed"
                      }
                      text="Não"
                      type="button"
                    />
                  </span>
                </div>
              )}
            </div>

            {fields.map((field, index) =>
              index == 0 ? (
                <div key={field.id}>
                  <CssTextField
                    id="outlined-basic"
                    label="Imagem da capa"
                    variant="outlined"
                    {...register(`photos.${index}.link`)}
                  />
                  {errors.photos && (
                    <StyledParagraph $fontColor="red">
                      {errors.photos[index]?.link?.message}
                    </StyledParagraph>
                  )}
                </div>
              ) : (
                <div key={field.id}>
                  <CssTextField
                    id="outlined-basic"
                    label={`${index}ª imagem da galeria`}
                    variant="outlined"
                    {...register(`photos.${index}.link`)}
                  />
                  <Button
                    type="button"
                    onClick={() => remove(index)}
                    color="secondary"
                  >
                    remover campo
                  </Button>
                  {errors.photos && (
                    <StyledParagraph $fontColor="red">
                      {errors.photos[index]?.link?.message}
                    </StyledParagraph>
                  )}
                </div>
              )
            )}
            <DefaultButton
              buttonFunction={() =>
                append({
                  link: "",
                })
              }
              backgroundcolor="--color-brand4"
              bordercolor="--color-brand4"
              textcolor="--color-brand1"
              text="Adicionar campo para imagem da galeria"
              type="button"
            />
          </StyledForm>
        </DialogContent>
        <DialogActions>
          {isCreateForm ? (
            <span style={{ display: "flex", gap: "10px" }}>
              <DefaultButton
                buttonFunction={handleClose}
                backgroundcolor="--color-grey6"
                bordercolor="--color-grey6"
                textcolor="--color-grey2"
                text="Cancelar"
                type="button"
              />
              <DefaultButton
                buttonFunction={handleSubmit(onSubmit)}
                backgroundcolor="--color-brand1"
                bordercolor="--color-brand1"
                textcolor="--color-whiteFixed"
                text="Criar anúncio"
                type="submit"
              />
            </span>
          ) : (
            <span style={{ display: "flex", gap: "10px" }}>
              <DefaultButton
                buttonFunction={handleClose}
                backgroundcolor="--color-grey6"
                bordercolor="--color-grey6"
                textcolor="--color-grey2"
                text="Cancelar"
                type="button"
              />
              <DefaultButton
                buttonFunction={() => {
                  announcement?.id && onDelete(announcement?.id);
                }}
                backgroundcolor="--color-alert1"
                bordercolor="--color-alert1"
                textcolor="--color-alert3"
                text="Excluir"
                type="button"
              />
              <DefaultButton
                buttonFunction={handleSubmit(onSubmit)}
                backgroundcolor="--color-brand1"
                bordercolor="--color-brand1"
                textcolor="--color-whiteFixed"
                text="Salvar alterações"
                type="submit"
              />
            </span>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AnnouncementForm;
