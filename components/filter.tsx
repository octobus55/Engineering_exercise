import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { CourseLevel, CourseType } from "../types";

const useStyles = makeStyles({
  formControl: {
    margin: 8,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 16,
    minWidth: 120,
  },
});

interface IFilterProps {
  onSelectChange: (
    event: React.ChangeEvent<
      | HTMLTextAreaElement
      | HTMLInputElement
      | {
          value: unknown;
          name: string;
        }
    >
  ) => void;
  onTitleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  title: string;
  type: string;
  level: string;
}

const Filter: React.FC<IFilterProps> = ({
  onSelectChange,
  onTitleChange,
  title,
  type,
  level,
}) => {
  const classes = useStyles();
  return (
    <div className="filter-container">
      <h2>Filter By:</h2>
      <TextField
        id="outlined-basic"
        label="Title"
        name="title"
        variant="outlined"
        value={title}
        onChange={onTitleChange}
      />
      <FormControl variant="outlined" classes={{ root: classes.formControl }}>
        <InputLabel id="demo-simple-select-outlined-label">
          Class Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          name="type"
          onChange={onSelectChange}
          label="Class Type"
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Object.keys(CourseType).map((level) => (
            <MenuItem key={level} value={CourseType[level]}>
              {CourseType[level]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" classes={{ root: classes.formControl }}>
        <InputLabel id="demo-simple-select-outlined-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={level}
          name="level"
          onChange={onSelectChange}
          label="Level"
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Object.keys(CourseLevel).map((level) => (
            <MenuItem key={level} value={CourseLevel[level]}>
              {CourseLevel[level]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
