import { useForm, useFieldArray } from "react-hook-form";
import { StyledForm } from "./style";
import { IAnnouncementFormProps, announcementsDataForm } from "./types";
import { toast } from "react-toastify";
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
import { StyledFieldset } from "./AnnouncementInput/fieldSetStyled";
import { DefaultButton } from "../../DefaultButton";

const AnnouncementForm = ({
  submitFunction,
  isCreateForm,
  open,
  setOpen,
}: IAnnouncementFormProps) => {
  const { allBrands, loadingForm, modelsList, getCarsPerBrands, carsList } =
    useKenzieKars();

  const [selectedCar, setSelectedCar] = useState<ICar>();

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
  });

  const { fields, append, remove } = useFieldArray({
    name: "photos",
    control,
  });

  useEffect(() => {
    console.log(fields);
    if (fields.length < 1) {
      append({
        link: "",
      });
      console.log(fields.length);
    }
  }, []);

  useEffect(() => {
    selectedCar && setValue("year", selectedCar?.year);
    selectedCar &&
      setValue(
        "fuel",
        selectedCar?.fuel == 1
          ? "flex"
          : selectedCar?.fuel == 2
          ? "hibrido"
          : "elétrico"
      );
  }, [selectedCar]);

  const onSubmit = (data: announcementsDataForm) => {
    Number(data.price) > Number(selectedCar?.value)
      ? (data.higherThanFipe = true)
      : (data.higherThanFipe = false);
    submitFunction(data);    
    toast.success("Anúncio cadastrado com sucesso!");
    setOpen(false);    
  };

  return (
    <div>
      <DefaultButton
        text="Criar Anuncio"
        textcolor="--color-brand1"
        type="button"
        backgroundColor="--color-grey10"
        bordercolor="--color-brand1"
        buttonFunction={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose} scroll="body">
        <DialogTitle>Cadastre seu veículo</DialogTitle>
        <DialogContent>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Autocomplete
              options={allBrands}
              filterSelectedOptions
              {...register("brand")}
              onChange={(event, value) => {
                value !== null && setValue("brand", value);
                console.log(value);
                // setSelectedBrand(value);
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
            <Autocomplete
              options={modelsList}
              filterSelectedOptions
              {...register("model")}
              disabled={modelsList.length === 0}
              loading={loadingForm}
              onChange={(event, value) => {
                value !== null && setValue("model", value);
                console.log(value);
                setSelectedCar(carsList.find((car) => car.name === value));
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
                  console.log("fuel value", event.target.value);
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
              <StyledFieldset>
                <CssTextField
                  id="outlined-basic"
                  label="Preço tabela FIPE"
                  variant="outlined"
                  value={selectedCar?.value}
                  disabled={true}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
              </StyledFieldset>
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
              backgroundColor="--color-brand4"
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
                backgroundColor="--color-grey6"
                bordercolor="--color-grey6"
                textcolor="--color-grey2"
                text="Cancelar"
                type="submit"
              />
              <DefaultButton
                buttonFunction={handleSubmit(onSubmit)}
                backgroundColor="--color-brand1"
                bordercolor="--color-brand1"
                textcolor="--color-whiteFixed"
                text="Criar anúncio"
                type="submit"
              />
            </span>
          ) : (
            <span>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit(submitFunction)}>
                Salvar alterações
              </Button>
            </span>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AnnouncementForm;
