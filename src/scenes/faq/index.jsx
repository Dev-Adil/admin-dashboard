import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqs = [
    {
      question: "What is the purpose of this admin dashboard?",
      answer:
        "It's a sample project showcasing my React skills and best practices.",
    },
    {
      question: "Can I customize the layout or color theme?",
      answer:
        "Absolutely. The design can be tailored to your brand or requirements.",
    },
    {
      question: "How do you handle data integration?",
      answer:
        "I can connect REST or GraphQL APIs and display data in real-time.",
    },
    {
      question: "Is this dashboard mobile-friendly?",
      answer: "Yes, it’s built with responsive design to adapt across devices.",
    },
    {
      question: "Can you add features like charts or forms?",
      answer:
        "Yes, I can integrate data visualization libraries and robust form handling.",
    },
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqs.map((faq, idx) => (
        <Accordion key={idx} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography colors={colors.greenAccent[500]} variant="h5">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
