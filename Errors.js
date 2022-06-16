  function Getweb3ErrorReason(code)
  {
	  switch (parseInt(code)) {
		  case 4001:
			  return "User cancelled the Transaction "
			  break;
			  case 4100:
				return "Account is not authorized"
				break;
				case 4200:
					return "Method not supported"
					break;
					case 4900:
						return "Not connected"
						break;
						case 4901:
							return "Not correct chain"
							break;
							case 32700:
								return "Incomplete request"
								break;
								case 32600:
									return "Structure or properties arent correct"
									break;
									case 32601:
										return "Method does not exist"
										break;
										case 32602:
											return "Wrong arguments passed"
											break;
											case 32603:
												return "Internal error"
												break;
												case 32000:
													return "Invalid input"
													break;
													case 32001:
														return "Resource not found."
														break;
														case 32002:
															return "Resource unavailable."
															break;
															case 32003:
																return "Transaction rejected."
																break;
																case 32004:
																	return "Method not supported."
																	break;
																	case 32005:
																		return "Request limit exceeded."
																		break;
	  }
	  return "unknown error"
  }
