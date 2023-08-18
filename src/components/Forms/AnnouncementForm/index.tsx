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
  TextField,
} from "@mui/material";
import useKenzieKars from "../../../hooks/useKenzieKars";
import React, { useEffect, useState } from "react";
import { ICar } from "../../../interfaces/KenzieKarsContext.types";
import { FaMinus } from "react-icons/fa";
import { StyledParagraph } from "./AnnouncementInput/style";

const AnnouncementForm = ({
  submitFunction,
  isCreateForm,
  open,
  setOpen,
}: IAnnouncementFormProps) => {
  // const theme = useTheme();

  //   const { createAnnouncement } = useAnnouncements();
  //   const [openAnnouncementModal, setOpenAnnouncementModal] = useState(false);

  //   <AnnouncementForm
  //   isCreateForm={true}
  //   open={openAnnouncementModal}
  //   setOpen={setOpenAnnouncementModal}
  //   submitFunction={createAnnouncement}
  // />

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
    if (fields.length < 3) {
      append({
        link: "",
      });
      console.log(fields.length);
    }
    if (fields.length < 3) {
      append({
        link: "",
      });
      console.log(fields.length);
    }
    if (fields.length < 3) {
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
  // const selectedValue = useWatch({
  //   control,
  //   name: "brand", // Nome do campo a ser observado
  // });

  const onSubmit = (data: announcementsDataForm) => {
    Number(data.price) > Number(selectedCar?.value)
      ? (data.higherThanFipe = true)
      : (data.higherThanFipe = false);
    console.log(data);
    submitFunction(data);
    // closeModal();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Anunciar veículo
      </Button>
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
              renderInput={(params) => <TextField {...params} label="Marca" />}
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
                <TextField
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
            <TextField
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
            {/* {errors.year && (
              <StyledParagraph $fontColor="red">
                {errors.year.message}
              </StyledParagraph>
            )} */}
            <TextField
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
            {/* {errors.fuel && (
              <StyledParagraph $fontColor="red">
                {errors.fuel.message}
              </StyledParagraph>
            )} */}
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
            <div>
              <TextField
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
              <AnnouncementInput
                label="Preço"
                type="text"
                register={register("price")}
                error={errors.price}
              />
            </div>

            <AnnouncementInput
              label="Descrição"
              type="text"
              register={register("description")}
              error={errors.description}
            />
            {fields.map((field, index) =>
              index == 0 ? (
                <div key={field.id}>
                  <TextField
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
              ) : index <= 2 ? (
                <div key={field.id}>
                  <TextField
                    id="outlined-basic"
                    label={`${index}ª imagem da galeria`}
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
                  <TextField
                    id="outlined-basic"
                    label={`${index}ª imagem da galeria`}
                    variant="outlined"
                    {...register(`photos.${index}.link`)}
                  />
                  <Button type="button" onClick={() => remove(index)}>
                    <FaMinus />
                  </Button>
                  {errors.photos && (
                    <StyledParagraph $fontColor="red">
                      {errors.photos[index]?.link?.message}
                    </StyledParagraph>
                  )}  
                </div>
              )
            )}
            <Button
              type="button"
              onClick={() =>
                append({
                  link: "",
                })
              }
            >
              Adicionar campo para imagem da galeria
            </Button>
            <Button type="submit">Anunciar veículo</Button>
          </StyledForm>
        </DialogContent>
        <DialogActions>
          {isCreateForm ? (
            <span>
              <Button onClick={handleClose}>Cancelar</Button>
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
