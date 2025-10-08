import React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  Grid,
  TextField,
  Stack,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";

const categories = [
  {
    title: "Estatutos y Normativas",
    documents: [
      {
        title: "Estatutos de la AETPUCE - 2023",
        desc: "Actualización aprobada en Asamblea General del 15 de marzo de 2023",
      },
      {
        title: "Reglamento Interno",
        desc: "Reglamento interno de funcionamiento de la asociación",
      },
    ],
  },
  {
    title: "Normativas de Préstamos",
    documents: [
      {
        title: "Política de Préstamos 2023",
        desc: "Normativa actualizada para solicitud y aprobación de préstamos",
      },
    ],
  },
  {
    title: "Actas de Asamblea",
    documents: [
      {
        title: "Acta de Asamblea General Ordinaria - 2023",
        desc: "Acta de la asamblea celebrada el 15 de marzo de 2023",
      },
      {
        title: "Acta de Asamblea Extraordinaria - Junio 2023",
        desc: "Acta de la asamblea extraordinaria celebrada el 20 de junio de 2023",
      },
    ],
  },
  {
    title: "Formatos y Solicitudes",
    documents: [
      {
        title: "Formulario de Solicitud de Préstamo",
        desc: "Formato oficial para solicitud de préstamos",
      },
    ],
  },
];

const DocumentsPage = () => {
  return (
    <Box p={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold" color="#0056b3">
          Documentos Institucionales
        </Typography>
        <TextField size="small" label="Buscar documentos..." />
      </Stack>

      <Card>
        <CardHeader
          title="Documentos de la AETPUCE"
          sx={{ backgroundColor: "#0056b3", color: "white" }}
        />
        <CardContent>
          {categories.map((cat, i) => (
            <Box key={i} mb={3}>
              <Typography variant="subtitle1" color="#0056b3" fontWeight="bold" mb={1}>
                {cat.title}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              {cat.documents.map((doc, j) => (
                <Box
                  key={j}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={1}
                  sx={{
                    "&:hover": { backgroundColor: "#f8f9fa" },
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Box>
                    <Typography fontWeight="600">{doc.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {doc.desc}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" startIcon={<VisibilityIcon />}>
                      Ver
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="grey"
                      startIcon={<DownloadIcon />}
                    >
                      Descargar
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DocumentsPage;
