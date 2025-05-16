import React, {
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  useLayoutEffect,
} from "react";
import Properties from "../services/home/propertyService";
import { useNavigate } from "react-router-dom";

const AutocompleteSearch: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any[]>([]); // Change the type as per the API response
  const [loadingData, setLoadingData] = useState(false);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const search = (input: string) => {
    if (input.length < 3) {
      setResults([]);
      setShowResults(false);

      return;
    }
    setLoadingData(true);
    Properties.searchCitites(null, input)
      .then((res) => {
        setResults(res.data);
        setShowResults(true);
        setLoadingData(false);
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(input);
      search(input);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  useEffect(() => {
    // Add a click event listener to the document to handle clicks outside of the autocomplete component
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside of the autocomplete component, so close the results
        setResults([]);
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleResultClick = (result: any) => {
    let city = result.hierarchy.slice(0, 3).slice(-1);
    console.log(city);
    navigate("/property", {
      state: {
        ta: "sell",
        ts: "1",
        tci: `${result.name},${city[0].name}`,
      },
    });
  };

  return (
    <div
      id="autocomplete"
      className="autocomplete position-relative"
      ref={autocompleteRef}
    >
      <div className="input-group">
        <input
          placeholder="Search by city or area"
          className="form-control autocomplete bg-transparent rounded-0 global-search"
          value={input}
          onChange={handleInputChange}
        />
        <span className="input-group-text border-0 rounded-0 bg-transparent">
          {loadingData ? (
            <>
              {" "}
              <i
                className="fa fa-spinner fa-spin"
                style={{ fontSize: 24, color: "white" }}
              />
            </>
          ) : (
            <img src="/assets/img/search.png" width="25" height="25" alt="" />
          )}
        </span>
      </div>
      {showResults ? (
        <>
          <ul className="autocomplete-result-list border-0">
            {results.length === 0 ? (
              <>
                <li className="no-results">No results found</li>
              </>
            ) : (
              <>
                {results.map((result) => {
                  const hierarchyNames = result.hierarchy
                    .map((item: any) => item.name)
                    .filter((name: any) => name !== result.name);

                  return (
                    <li
                      className="pointer"
                      key={result.pageid}
                      onClick={() => handleResultClick(result)}
                    >
                      <span>{result.name}</span>
                      {", "}
                      <span className="">
                        {hierarchyNames.length > 0 && (
                          <>
                            {hierarchyNames
                              .slice(0, 3)
                              .reverse()
                              .map((name: any, index: any, array: any) => (
                                <span key={name}>
                                  {name}
                                  {index < array.length - 1 ? "" : ""}
                                </span>
                              ))
                              .slice(0, 1)}
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default AutocompleteSearch;
